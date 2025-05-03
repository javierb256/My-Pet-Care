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

// type Weights = {
//   weight: string,
// }

// function WeightChart({ dates }: any) {
function WeightChart({ weights, dates}: any) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  const sortedDates: string[] = dates.sort((a:any,b:any) => a-b).map((date: Date) => {
    const format = date.toLocaleDateString('en-US', {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return format
  })
  let finalDates = [];
  for(let i=0; i<dates.length; i++){
    finalDates.push([sortedDates[i], weights[i]])
  }
  // console.log(dates.sort((a:any,b:any) => a-b))
  // console.log(weights)
  // const sortedDates: string[] = data.sort((a:any,b:any) => b[0]-a[0])
  // console.log(sortedDates)
  // const test = ["4/29", weight]
  // const data = {

  //   datasets: [
  //     {
  //       label: ` Weight`,
  //       data: [["4/25", 10], ["4/26", 20], ["4/27", 30], ["4/28", 5]],
  //       borderColor: "hsl(194, 100%, 46%)",
  //     },
  //   ],
  // };

  const chartData = {
    datasets: [
      {
        label: `Weight`,
        // data: [["4/25",3]],
        data: finalDates,
        borderColor: "hsl(194, 100%, 46%)",
      },
    ],
  };

  return <Line options={options} data={chartData} className={styles.chart} />;
}

export default WeightChart;
