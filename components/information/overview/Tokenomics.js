"use client";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const data = {
    labels: ['Crowdsale investors', 'Foundation'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [80, 20],
        backgroundColor: ['#0052FE', '#FB923C'],
        hoverBackgroundColor: ['#3B82F6', '#fdba74'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };
  return (
    <section className="w-full p-3 lg:p-6 bg-white rounded-md text-sm lg:text-[16px]">
      <h1 className="text-2xl font-bold mb-6">Tokenomics</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Initial Distribution</h2>

        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <div style={{ width: '200px', height: '200px' }}>
            <Doughnut data={data} options={options} />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </section>
  );
}
