import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container is-widescreen">
        <Header />
        <Navigation />
        <section className="section pt-5 has-background-DSCF8158">
          <header className="has-text-centered">
            <Image
              src="/images/somerset-strikers-logo-1000x1290.webp"
              alt={t("logo.alt")}
              width="256"
              height="330"
            />
          </header>
          <main className="content container is-max-width-30em has-text-centered mt-4">
            <p className="has-text-white has-text-shadow-1 is-size-5">
              {t("home.intro")}
            </p>
            <Link
              href="/join"
              className="button is-danger is-uppercase is-fullwidth is-large"
            >
              {t("home.join")}
            </Link>
          </main>
        </section>
        <section className="section has-background-white">
          <h2 className="title has-text-centered is-1 is-uppercase">
            Sponsors
          </h2>
          <p className="has-text-centered is-size-3">
            With thanks to our sponsors and supporters.
          </p>
          <div className="columns is-multiline is-centered is-vcentered is-width-75-percent-and-centered">
            <div className="column has-text-centered">
              <a href="https://www.specsavers.co.za/" rel="noreferrer">
                <Image
                  src="/images/sponsors/specsaverslogo.webp"
                  alt="Spec-Savers South Africa"
                  width="582"
                  height="256"
                />
              </a>
            </div>
            <div className="column has-text-centered">
              <a
                href="https://www.facebook.com/fpelitecricketacademy/"
                rel="noreferrer"
              >
                <Image
                  src="/images/sponsors/fpeliteacadaemylogo.webp"
                  alt="FP Elite Academy"
                  width="256"
                  height="256"
                />
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="https://definitivecm.com/" rel="noreferrer">
                <Image
                  src="/images/sponsors/definitive-capital-management.webp"
                  alt="Definitive Capital Management"
                  width="499"
                  height="257"
                />
              </a>
            </div>
          </div>
          <div className="columns is-multiline is-centered is-vcentered is-width-40-percent-and-centered">
          <div className="column has-text-centered ">
              <a href="https://www.redstor.com/" rel="noreferrer">
                <Image
                  src="/images/sponsors/redstorlogo.webp"
                  alt="Restor"
                  width="900"
                  height="256"
                />
              </a>
            </div>
            <div className="column has-text-centered ">
              <a href="https://ajmtax.co.za/" rel="noreferrer">
                <Image
                  src="/images/sponsors/ajmtaxlogo.webp"
                  alt="AJM Tax"
                  width="900"
                  height="256"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
