import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrentPage?: boolean;
  number: number;
}

export const PaginationItem = ({
  isCurrentPage = false,
  number,
}: PaginationItemProps) => {
  if (isCurrentPage) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  );
};
