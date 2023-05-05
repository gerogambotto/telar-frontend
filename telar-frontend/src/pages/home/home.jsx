import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { Technology } from "../../components/Technology/Technology.jsx";
import { Fragances } from "../../components/Fragances/Fragances.jsx";
import { House } from "../../components/House/House.jsx";
import "./styles.scss";

export function Home() {
  return (
    <Layout>
      <section className="home-section mt-5">
        <Technology />
        <Fragances />
        <House />
      </section>
    </Layout>
  );
}
