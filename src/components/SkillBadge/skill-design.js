const SkillColors = [
  {
    name: "JavaScript",
    foreColor: "#323330",
    backgroundColor: "#e6dea9"
  },
  {
    name: "jQuery",
    foreColor: "#1a2437",
    backgroundColor: "#98bcd0"
  },
  {
    name: "KnockoutJS",
    foreColor: "rgba(238, 94, 76, 0.9)",
    backgroundColor: "#e3e3e3"
  },
  {
    name: "Vue.js",
    foreColor: "#2A3642",
    backgroundColor: "#76c6a3"
  },
  {
    name: "Element UI",
    foreColor: "#409EFF",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "React",
    foreColor: "#0e7899",
    backgroundColor: "#e2e2e2"
  },  
  {
    name: "Node.js",
    foreColor: "#448A42",
    backgroundColor: "#d0e7ce"
  },  
  {
    name: "HTML",
    foreColor: "#fbfbfb",
    backgroundColor: "#d19283"
  },
  {
    name: "HTML5",
    foreColor: "#fbfbfb",
    backgroundColor: "#d19283"
  },
  {
    name: "CSS",
    foreColor: "#FFFFFF",
    backgroundColor: "#8968a9"
  },
  {
    name: "CSS3",
    foreColor: "#FFFFFF",
    backgroundColor: "#8968a9"
  },
  {
    name: "Responsive Web Design",
    foreColor: "#403943",
    backgroundColor: "#dbdbdb"
  },  
  {
    name: "ASP.NET",
    foreColor: "#FFFFFF",
    backgroundColor: "rgba(18, 95, 179, 0.6)"
  },
  {
    name: "ASP.NET Web API",
    foreColor: "#FFFFFF",
    backgroundColor: "rgba(18, 95, 179, 0.6)"
  },  
  {
    name: "C#",
    foreColor: "#FFFFFF",
    backgroundColor: "rgba(167, 83, 159, 0.7)"
  },
  {
    name: ".NET Framework",
    foreColor: "#FFFFFF",
    backgroundColor: "rgba(80, 39, 213, 0.7)"
  },
  {
    name: "WinForms",
    foreColor: "#0a5387",
    backgroundColor: "#cce8fc"
  },  
  {
    name: "SQL Server",
    foreColor: "rgba(221, 25, 32, 0.8)",
    backgroundColor: "#dedede"
  },
  {
    name: "MySQL",
    foreColor: "#00628D",
    backgroundColor: "#dcc5a8"
  },
  {
    name: "Entity Framework",
    foreColor: "#FFFFFF",
    backgroundColor: "#a740c2"
  },
  {
    name: "MS Azure",
    foreColor: "#0078D4",
    backgroundColor: "#ceeaff"
  }, 
  {
    name: "OOP",
    foreColor: "#2E3C53",
    backgroundColor: "#c6ebeb"
  },
  {
    name: "Design Patterns",
    foreColor: "#0077C9",
    backgroundColor: "#d9e6e2"
  },
  {
    name: "JSON",
    foreColor: "#656565",
    backgroundColor: "#FFFFFF"
  },
  {
    name: "XSL",
    foreColor: "#1DA387",
    backgroundColor: "#ccf6ee"
  },
  {
    name: "XML",
    foreColor: "#1C82FB",
    backgroundColor: "#cee5fd"
  },  
  {
    name: "FusionCharts",
    foreColor: "#635087",
    backgroundColor: "#f6b382"
  },
  {
    name: "Telerik Web Controls",
    foreColor: "#47a806",
    backgroundColor: "#dbfec4"
  },
  {
    name: "jqWidgets",
    foreColor: "#4b8a32",
    backgroundColor: "#cfecf8"
  },
  {
    name: "FileNet",
    foreColor: "#006b99",
    backgroundColor: "#e6e6e6"
  },
  {
    name: "WCF",
    foreColor: "#1B258F",
    backgroundColor: "#d5d8f7"
  },
  {
    name: "Web Services",
    foreColor: "#1B258F",
    backgroundColor: "#e5e7fa"
  },
  {
    name: "Crystal Reports",
    foreColor: "#383838",
    backgroundColor: "#8fd2a8"
  },
];

export default function skillColors(skill) {
  return SkillColors.find(d => d.name === skill);
}
