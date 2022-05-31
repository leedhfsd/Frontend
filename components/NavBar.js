import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {

  const router = useRouter();
  if (router.pathname === "/login") return null

  return (
    <nav>
      <div className="flex flex-row text-md">
        <Link href="/staff">
          <a className="ml-8 mr-4">인사</a>
        </Link>
        <Link href="/order">
          <a className="mx-4">발주</a>
        </Link>
        <Link href="/product">
          <a className="mx-4">물품</a>
        </Link>
        <Link href="/branch">
          <a className="mx-4">지점</a>
        </Link>
        <Link href="/parcel">
          <a className="mx-4">택배</a>
        </Link>
        <Link href="/event">
          <a className="mx-4">이벤트</a>
        </Link>
        <Link href="/profit">
          <a className="mx-4">수익</a>
        </Link>
        <Link href="/spending">
          <a className="mx-4">지출</a>
        </Link>
      </div>
    </nav>
  )
}