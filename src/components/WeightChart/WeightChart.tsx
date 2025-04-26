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
  Legend,
);


function WeightChart() {
  const options = {
   
  };

  const data = {

    datasets: [
      {
        label: ` Weight`,
        data: [["4/25", 10], ["4/26", 20], ["4/27", 30], ["4/28", 5]],
        borderColor: "hsl(194, 100%, 46%)",
      },
    ],
  };
  return <Line options={options} data={data} className={styles.chart}/>;
}


export default WeightChart;
