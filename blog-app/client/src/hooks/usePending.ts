import { SquareDashed } from "lucide"
import { useState } from "react"

export interface UsePendingUI {
  fetch: string,
  type?: AxiosType,
  fn: () => Promise<void>
}

enum AxiosType {
  POST,
  FETCH
}

const usePending = async (props: UsePendingUI) => {
  const [pending, setPending] = useState(false)
  await props.fn();
  
  return { pending };
}

export { usePending }