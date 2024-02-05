document.addEventListener("DOMContentLoaded", function () {
  // User Chart Data and Configuration
  const userData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "User Chart",
        data: [10, 20, 30],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 0, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(0, 0, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const userData1 = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "User Chart",
        data: [50, 20, 30, 80],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(255, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(0, 0, 255, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const userConfig = {
    scales: { y: { beginAtZero: true } },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  const userConfig1 = {
    scales: { y: { beginAtZero: true } },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    aspectRatio: 4,
  };

  // User Charts
  const userChart = new Chart(document.getElementById("userChart"), {
    type: "bar",
    data: userData,
    options: userConfig,
  });
  const userChart1 = new Chart(document.getElementById("userChart1"), {
    type: "bar",
    data: userData1,
    options: userConfig1,
  });
  const userChart2 = new Chart(document.getElementById("userChart2"), {
    type: "bar",
    data: userData,
    options: userConfig,
  });

  // User Pie Chart Data and Configuration
  const userPieData = {
    labels: ["Free Users", "Tier I", "Tier II"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 0, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(0, 0, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const userPieConfig = {
    maintainAspectRatio: false,
    aspectRatio: 1,
  };

  // User Pie Chart
  const userPieChart = new Chart(document.getElementById("userPieChart"), {
    type: "pie",
    data: userPieData,
    options: userPieConfig,
  });

  // Analytics Line Chart Data and Configuration
  const analyticsLineData = {
    labels: ["2022","2023", "2024", "Present"],
    datasets: [
      {
        label: "Analytics Line Chart",
        data: [80, 220, 130, 850],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 0, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(0, 0, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const analyticsLineConfig = {
    scales: { y: { beginAtZero: true } },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    aspectRatio: 2,
  };

  // Analytics Line Chart
  const analyticsLineChart = new Chart(
    document.getElementById("analyticsLineChart"),
    { type: "line", data: analyticsLineData, options: analyticsLineConfig }
  );


  // Analytics Doughnut Chart Data and Configuration
  const analyticsDoughnutData = {
    labels: ["Label1", "Label2", "Label3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 0, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(0, 0, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const analyticsDoughnutConfig = {
    // ... your configuration for the analytics doughnut chart
  };

  // Analytics Doughnut Chart
  const analyticsDoughnutChart = new Chart(
    document.getElementById("analyticsDoughnutChart"),
    {
      type: "doughnut",
      data: analyticsDoughnutData,
      options: analyticsDoughnutConfig,
    }
  );

});
