import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Hero from "../components/HomepageFeatures/hero";
import styles from "./index.module.css";

export default function Tutorial3() {
  const context = useDocusaurusContext();
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="container">
        <h1>Hey -- Peter chaudhary</h1>
        <p
          style={{
            color: "red",
          }}
        >
          as you can see every single page it's in folder src/pages as component
          can be styled how you want which is main you should have experiance
          with react js
        </p>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
