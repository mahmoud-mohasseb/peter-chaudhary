import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>
              A Web-powered By Peter <br />
              <span className="highlight"> Blog and documentation</span>
            </h1>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="/docs/intro"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/mahmoud-mohasseb/peter-chaudhary"
            >
              <img
                className={styles.githubIcon}
                src={useBaseUrl("/img/github.svg")}
                alt="GitHub Logo"
              />{" "}
              <span className={styles.githubButtonText}>GitHub</span>
            </Link>
            <p className="padding-top--md">
              Available on <strong>Version 5-6</strong>,{" "}
              <strong>Version 5-6</strong>, <strong>Version 5-6</strong>, and{" "}
              <strong>Version 5-6</strong> architectures
            </p>
          </div>
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl("/img/undraw_business_plan_re_0v81.svg")}
              alt="Peter-chaudhary Hero Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
