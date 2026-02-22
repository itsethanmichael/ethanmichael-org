import json, os
from openai import OpenAI


MODEL = "gpt-4o-mini"
TEMPERATURE = 0
CORPUS_FILE = "corpus.json"
QUERIES_FILE = "test_queries.txt"
RESULTS_DIR = "results"
os.makedirs(RESULTS_DIR, exist_ok=True)


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


with open(CORPUS_FILE, "r", encoding="utf-8") as f:
    CORPUS = json.load(f)

with open(QUERIES_FILE, "r", encoding="utf-8") as f:
    QUERIES = [line.strip() for line in f if line.strip()]


def retrieve_context(query: str, corpus: list[dict]) -> list[dict]:
    """Return entries whose text shares keywords with the query."""
    keywords = [w.lower() for w in query.split() if len(w) > 3]
    hits = []
    for item in corpus:
        if any(k in item["text"].lower() for k in keywords):
            hits.append(item)
    return hits


def ask_baseline(query: str) -> str:
    resp = client.chat.completions.create(
        model=MODEL,
        temperature=TEMPERATURE,
        messages=[{"role": "user", "content": f"Answer factually:\n{query}"}],
    )
    return resp.choices[0].message.content.strip()


def ask_rag_structured(query: str, context_items: list[dict]) -> str:
    context_text = " ".join(f"[{c['id']}] {c['text']}" for c in context_items)
    sys_msg = (
        "You are a data analyst. "
        "Answer using only the provided context. "
        "Return a valid JSON object with keys: question, answer, sources."
    )
    user_msg = f"Context:\n{context_text}\n\nQuestion:\n{query}"
    resp = client.chat.completions.create(
        model=MODEL,
        temperature=TEMPERATURE,
        messages=[
            {"role": "system", "content": sys_msg},
            {"role": "user", "content": user_msg},
        ],
    )
    return resp.choices[0].message.content.strip()


baseline_path = os.path.join(RESULTS_DIR, "baseline.txt")
rag_path = os.path.join(RESULTS_DIR, "rag_structured.txt")

with open(baseline_path, "w", encoding="utf-8") as b_out, \
     open(rag_path, "w", encoding="utf-8") as r_out:

    for q in QUERIES:
        print(f"\n▶ {q}")

        base_ans = ask_baseline(q)
        b_out.write(f"Q: {q}\nA: {base_ans}\n\n")
        print("Baseline:", base_ans)

        retrieved = retrieve_context(q, CORPUS)
        rag_ans = ask_rag_structured(q, retrieved)
        r_out.write(json.dumps({"query": q, "response": rag_ans}, indent=2))
        r_out.write("\n\n")
        print("RAG+Structured:", rag_ans)

print("\n✅ Results written to 'results/' directory.")
