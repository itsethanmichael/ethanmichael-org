from langchain_openai import ChatOpenAI
from langchain_core.tools import tool


@tool
def calculate_growth(previous: float, current: float) -> str:
    """Compute year-over-year growth percentage."""
    growth = (current - previous) / previous * 100
    return f"{growth:.2f}%"


llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

llm_with_tool = llm.bind_tools([calculate_growth])


response = llm_with_tool.invoke(
    "Apple’s revenue increased from 90.8B to 95.4B. What’s the growth rate?"
)


if hasattr(response, "tool_calls") and response.tool_calls:
    for call in response.tool_calls:
        if call["name"] == "calculate_growth":
            result = calculate_growth.func(**call["args"])
            print(f"🧮 Tool Output: {result}")

            final_answer = llm.invoke(
                f"The calculated growth is {result}. Please summarize this result clearly."
            )
            print(f"\n💬 Final Answer:\n{final_answer.content}")
else:
    print(f"\n💬 Direct Answer:\n{response.content}")




