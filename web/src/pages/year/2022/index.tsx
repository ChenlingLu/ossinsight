import Layout from "@theme/Layout";
import React, { createElement } from "react";
import Container from "@mui/material/Container";
import Head from "@docusaurus/Head";
import { styled } from "@mui/material/styles";

const sections = [
  require('./_sections/0-Banner'),
  require('./_sections/1-Keynotes'),
  require('./_sections/2-Languages'),
  require('./_sections/3-Countries'),
  require('./_sections/4-Topics'),
  require('./_sections/5-PopularRepos'),
  require('./_sections/6-ActiveRepos'),
  require('./_sections/7-Stargazers'),
  require('./_sections/8-MostActiveDevelopers'),
  require('./_sections/9-WeekdayWeekend'),
  require('./_sections/10-WeekdayDistribution'),
  require('./_sections/11-Appendix'),
];

export default function Page() {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=JetBrains+Mono"  rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@1,100&display=swap" rel="stylesheet"/>
      </Head>
      <PageContainer>
        <Container component="main" maxWidth="xl" sx={{ py: 8 }}>
          {sections.map((section, i) => createElement(section.default, { key: i }))}
        </Container>
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled('div', { label: 'PageContainer' })({
  background: "transparent linear-gradient(180deg, #242526 0%, #0B003B 100%) 0% 0% no-repeat padding-box",
  fontSize: 20,
})
