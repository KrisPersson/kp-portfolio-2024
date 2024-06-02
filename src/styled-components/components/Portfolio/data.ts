
export const PORTFOLIO: PortfolioItem[] = [
    {
        label: "OurStudio",
        description: "A website for the company where I did my internship. This project utilizes NextJS (App-router), Styled Components, and Typescript.",
        hrefUi: "https://ourstudio-styled-comp-test.vercel.app/",
        hrefCode: "https://github.com/KrisPersson/ourstudio-styled-comp-test",
        mockImgName: "os"
    },
    {
        label: "Volvo Dashboard",
        description: "A Front-End design of a Volvo Dashboard presenting data as graphics. NextJS, Emotion CSS, ChartJS, and Typescript.",
        hrefUi: "https://volvo-dashboard.vercel.app/",
        hrefCode: "https://github.com/KrisPersson/ourstudio-volvo-emotion-eval",
        mockImgName: "volvo"
    },
    {
        label: "Tripoint",
        description: "Landing page for company selling Sports Glasses and Shades. NextJS, Sass, TypeScript.",
        hrefUi: "https://tripoint.vercel.app/",
        hrefCode: "https://github.com/KrisPersson/tripoint",
        mockImgName: "tripoint"
    },
    {
        label: "Wayke",
        description: "User interface for an online-market selling and buying used cars. React, Linaria CSS, TypeScript.",
        hrefUi: "https://wayke-elbil.vercel.app/elbil",
        hrefCode: "https://github.com/KrisPersson/wayke-eval-linaria",
        mockImgName: "wayke"
    }
]

export type PortfolioItem = {
    label: string;
    description: string;
    hrefUi: string;
    hrefCode: string;
    mockImgName?: string;
}