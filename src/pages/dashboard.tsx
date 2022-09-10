import { Flex, SimpleGrid } from '@chakra-ui/react';
import { Chart } from '../components/Chart/index';

import { Header } from '../components/Header/index';
import { Sidebar } from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Flex direction="column">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
          pb="4"
        >
          <Chart title="Inscritos da semana" />

          <Chart title="Taxa de abertura" />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
