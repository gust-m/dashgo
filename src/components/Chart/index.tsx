import dynamic from 'next/dynamic';
import { Box, Text, theme } from '@chakra-ui/react';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },

    categories: [
      '2022-09-01T00:00:00.000Z',
      '2022-09-02T00:00:00.000Z',
      '2022-09-03T00:00:00.000Z',
      '2022-09-04T00:00:00.000Z',
      '2022-09-05T00:00:00.000Z',
      '2022-09-06T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
  { name: 'series1', data: [31, 21, 41, 52, 52, 64] },
];

interface ChartProps {
  title: string;
}

export const Chart = ({ title }: ChartProps) => {
  return (
    <Box p={['6', '8']} bg="gray.800" borderRadius={8} height="100%">
      <Text fontSize="lg" mb="4">
        {title}
      </Text>

      <ApexChart options={options} series={series} type="area" height={160} />
    </Box>
  );
};
