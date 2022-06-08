import Seo from "../components/Seo";

export default function Parcel() {
  return (
    <>
    <style jsx>{`
.parcelServiceSelect {
  text-align: center;
  justify-content: center;
}
.parcelButton {
  border: 1px solid black;
  margin-left: 10px;
  margin-right: 10px;
}
    `}</style>
      <main className="mx-96">
        <Seo title="택배" />
        <div className="flex flex-row justify-between my-8">
          <div className="flex-col">
            <h1 className="text-2xl font-bold">택배 배송하기</h1>
            <h1 className="text-xs text-gray-400">고객님은 운송장 조회나 택배 배송 서비스를 이용하실 수 있습니다.</h1>
          </div>

        </div>
        <div className="parcelServiceSelect">
          <button className = "parcelButton" type="button" onClick={() => window.location.href = 'parcel/checkParcel'}>운송장 조회하기</button>
          <button className = "parcelButton" type="button" onClick={() => window.location.href = 'parcel/orderParcel'}>택배 배송 서비스 이용하기</button>
        </div>
      </main>
    </>
  )
}