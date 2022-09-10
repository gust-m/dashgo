import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = false }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Moraes</Text>
          <Text color="gray.300" fontSize="small">
            gustavoc.moraes@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Moraes"
        src="https://github.com/gust-m.png"
      />
    </Flex>
  );
};
