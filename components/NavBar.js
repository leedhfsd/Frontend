import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {

  const router = useRouter();
  if (router.pathname === "/login") return null
  
  
  return (
    <nav>
      <div className="flex flex-row text-md">
        <Link href="/staff">
        <a style={{marginLeft: 32}}className={router.pathname === "/staff" ? "active" : "common"}>인사</a>
        </Link>
        <Link href="/order">
          <a className={router.pathname === "/order" ? "active" : "common"}>발주</a>
        </Link>
        <Link href="/product">
          <a className={router.pathname === "/product" ? "active" : "common"}>물품</a>
        </Link>
        <Link href="/branch">
          <a className={router.pathname === "/branch" ? "active" : "common"}>지점</a>
        </Link>
        <Link href="/parcel">
          <a className={router.pathname === "/parcel" ? "active" : "common"}>택배</a>
        </Link>
        <Link href="/event">
          <a className={router.pathname === "/event" ? "active" : "common"}>이벤트</a>
        </Link>
        <Link href="/profit">
          <a className={router.pathname === "/profit" ? "active" : "common"}>수익</a>
        </Link>
        <Link href="/spending">
          <a className={router.pathname === "/spending" ? "active" : "common"}>지출</a>
        </Link>
        <style jsx>{`
          .active {
            border-bottom: solid 2px;
            padding-bottom: 8px;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .common {
            margin-left: 1rem;
            margin-right: 1rem;
          }
        
        `}</style>
      </div>
    </nav>
  )
}