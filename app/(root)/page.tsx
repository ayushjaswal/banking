import HeaderBox from "@/components/HeaderBox";
import RightBar from "@/components/RightBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "One",
    lastName: "Kunstler",
    email: "onekunstler@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext={
              "Access and manage your account and transactions efficiently"
            }
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={120.25}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 13.5 }, { currentBalance: 1503.6 }]}
      />
    </section>
  );
};

export default Home;
