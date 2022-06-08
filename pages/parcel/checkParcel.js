import { useState } from "react";
import Seo from "../../components/Seo";

export default function CheckParcel() {
  return (
    <main className="mx-96">
      <Seo title="택배" />
      <div className="flex flex-row justify-between my-8">
        <div className="flex-col">
          <h1 className="text-2xl font-bold">운송장 조회하기</h1>
          <h1 className="text-xs text-gray-400">고객님은 운송장을 조회하실 수 있습니다.</h1>
        </div>
      </div>
    </main>
  )
}