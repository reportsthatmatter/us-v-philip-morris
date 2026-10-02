import { contentsOutline, doubleSpaced, numberedFindings, pipeline, runningFurniture } from "@rtm/ingest";

/**
 * How this report is built. Owned by the report: every decision that shaped
 * its text is named here, and the passes it composes are library code, so a
 * fix to a shared pass reaches every report that calls it.
 */
export default pipeline({
  id: "us-v-philip-morris",
  title: "United States v. Philip Morris USA Inc.: Amended Final Opinion",
  authors: "Gladys Kessler, U.S. District Judge, District of Columbia",
  published_at: "17 August 2006",
  source_url: "https://www.justice.gov/sites/default/files/civil/legacy/2014/09/11/amended%20opinion_0.pdf",
  repo: ".",
  volumes: [
    {
      path: "archive/final-opinion.pdf",
      sha256: "45b74f67a41581107bb64ebbe3e8d27f323fd30c7c8eca16c27d542c82983676",
    },
  ],
  // The opinion numbers its Findings of Fact 1–4,088 straight through; each
  // is a paragraph that opens with its number (reportsthatmatter-9ek).
  passes: [runningFurniture({ minShare: 0.5, numbersTrackPages: true }), doubleSpaced(), numberedFindings(), contentsOutline()],
});
