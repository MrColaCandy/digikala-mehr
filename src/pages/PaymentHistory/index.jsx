import NavBar from "@components/NavBar";
import PaymentHistoryWrapper from "./components/PaymentHistoryWrapper"
import "./style.css"

function PaymentHistory() {
  return (
    <div className="container-paymentHistory">
      <NavBar />
      <main className="">
        <PaymentHistoryWrapper/>
      </main>
    </div>
  );
}

 export default PaymentHistory ;