import { redirect } from "next/navigation"

// 구버전 url로 처리되도 신버전 url로 리다이렉트
export default function Page() {
  return redirect('/i/flow/login')
}