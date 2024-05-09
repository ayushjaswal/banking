import HeaderBox from "@/components/HeaderBox";
import RightBar from "@/components/RightBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  console.log(loggedIn);
  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.name || "Guest"}
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
