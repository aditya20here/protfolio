import Context from "@mui/base/TabsUnstyled/TabsContext";

const State = (props) => {
  const projectData = [
    {
      projectTitle: "Home Restaurant",
      projectDescription:
        "Home Restaurant is a food delivery system. The main motive of this app is many hotels directly gain massive users through this app.",
      projectSource:
        "Java | Firebase | Google map api | Google login api | Google pay api",
      projectImage:
        "https://user-images.githubusercontent.com/106305664/178278041-cdf113e0-ef8d-439d-9042-0dacad59fed0.png",
      githubLink: "https://github.com/ADITYAbasude/Home-Restaurant",
      youtubeLink: "https://www.youtube.com/watch?v=lnO81rIoxPM&t=43s",
    },
    {
      projectTitle: "Pip",
      projectDescription:
        "Pip is a social media app. Which can share their news all over the world and users can do likes in any pip, and there are so many features.",
      projectSource: "Java | Firebase | Material UI",
      projectImage:
        "https://user-images.githubusercontent.com/106305664/178277325-4de6767b-d581-482a-aeec-57f2ab08025c.png",
      githubLink: "https://github.com/ADITYAbasude/pip",
      youtubeLink: "https://www.youtube.com/watch?v=0hK08qkHqzQ",
    },
    {
      projectTitle: "Shopify",
      projectDescription:
        "Shopify is a E-commerce website, which can sellers can sell that product and buyer can but the product.",
      projectSource:
        "React.js | Redux | Express.js | MongoDB | Multer | RazorPay Api | MUI | Bootstrap React",
      projectImage:
        "https://user-images.githubusercontent.com/106305664/178278686-e8f3b2fc-124b-4827-83ae-7718b71ca428.png",
      githubLink: "https://github.com/ADITYAbasude/Shopify",
      youtubeLink: "https://www.youtube.com/watch?v=TsBLdjDoDCk&t=232s",
    },
    {
      projectTitle: "Bajaao",
      projectDescription:
        "Bajaao is a music platform with an elegant UI and it has support for only offline music",
      projectSource: "Kotlin | Palette Api | Media Services ",
      projectImage:
        "https://user-images.githubusercontent.com/106305664/178279203-19a7267a-1e2c-4ffd-a1e9-a0c5b8f56e7b.png",
      githubLink: "https://github.com/ADITYAbasude/Bajaao",
      youtubeLink: "https://www.youtube.com/watch?v=0T5raRurZOA",
    },
  ];

  return (
    <Context.Provider value={{ projectData }}>
      {props.children}
    </Context.Provider>
  );
};

export default State;
