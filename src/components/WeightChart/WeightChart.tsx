import styles from "./WeightChart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeightChart({ data, petName }: any) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  //run sort function each time data is submitted and reformat date
  const sortedData: string[] = data
    .sort((a: any, b: any) => a[0] - b[0])
    .map((element: any) => {
      const format = element[0].toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return [format, element[1]];
    });

  const chartData = {
    datasets: [
      {
        label: petName === "" ? `Pet's Weight` : petName + "'s Weight",
        data: sortedData,
        borderColor: "hsl(194, 100%, 46%)",
      },
    ],
  };

  return <Line options={options} data={chartData} className={styles.chart} />;
}

export default WeightChart;
