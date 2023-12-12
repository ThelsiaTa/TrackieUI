import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CropChart = () => {
  const chartoptions = {
    series: [
      {
        name: "2022",
        data: [0, 31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "2023",
        data: [0, 11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 2,
        borderColor: "rgba(0,0,0,0.1)",
      },
      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
        ],
      },
      yaxis: {
        title: {
          text: "Crop Yield (kg/ha)",
        },
      },
    },
  };
  return (
      <div className="p-4">
        <CardTitle tag="h5" className="text-lg">Crop Yield Report</CardTitle>
        <CardSubtitle className="text-muted text-sm" tag="h6">
          Area varies
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        />
      </div>
  );
};

export default CropChart;