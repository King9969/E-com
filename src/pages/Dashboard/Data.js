export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const data3 = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => Math.random() * 1000),
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(	37, 99, 235)",
      data: labels.map(() => Math.random() * 1000),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Dataset 3",
      backgroundColor: "rgb(17, 24, 39)",
      data: labels.map(() => Math.random() * 1000),
    },
  ],
};
export const data2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [200, 450, 300, 800, 500, 600, 400],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(	37, 99, 235)",
    },
  ],
};
