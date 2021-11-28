import { Box, Button, Container, VStack, Text, Heading } from '@chakra-ui/react'
import Bg from './bg'
import RedisDesktopTable from './redis-pricing-desktop'
import RedisMobileTable from './redis-pricing-mobile'
import KafkaDesktopTable from './kafka-pricing-desktop'
import KafkaMobileTable from './kafka-pricing-mobile'
import CustomLink from './custom-link'
import { LINKS } from '../constants'
import { useState } from 'react'

function PriceButton({ isActive, children, ...props }) {
  return (
    <Button
      py={1.5}
      height="auto"
      borderRadius={0}
      border="1px"
      fontSize="sm"
      borderColor="white"
      bgColor={isActive ? 'white' : null}
      color={isActive ? 'black' : 'whiteAlpha.700'}
      _hover={{}}
      {...props}
    >
      {isActive && '✓ '}
      {children}
    </Button>
  )
}

function SectionPricing() {
  const [price, setPrice] = useState('redis')

  return (
    <Box
      as="section"
      id="section-pricing"
      pos="relative"
      overflow="hidden"
      py={['100px', '140px']}
      textAlign="center"
    >
      <Bg />

      <Container maxW="5xl">
        {/**/}

        <Box as="header">
          <Heading as="h2" size="2xl">
            Plans & Pricingg
          </Heading>
          <Container maxW="3xl">
            <Text fontSize={['md', 'xl']} color="whiteAlpha.600" mt={3}>
              Pay only for what you use with per-request pricing.
            </Text>
          </Container>

          <Box mt="24px">
            <PriceButton
              borderLeftRadius="md"
              borderRightWidth={0}
              isActive={price === 'redis'}
              onClick={() => setPrice('redis')}
            >
              Redis
            </PriceButton>
            <PriceButton
              borderRightRadius="md"
              borderLeftWidth={0}
              isActive={price === 'kafka'}
              onClick={() => setPrice('kafka')}
            >
              Kafka
            </PriceButton>
          </Box>
        </Box>

        <Box mt={[10, 20]}>
          {price === 'redis' && (
            <>
              <Box d={['none', 'block']}>
                <RedisDesktopTable />
              </Box>
              <Box d={['block', 'none']}>
                <RedisMobileTable />
              </Box>
            </>
          )}
          {price === 'kafka' && (
            <>
              <Box d={['none', 'block']}>
                <KafkaDesktopTable />
              </Box>
              <Box d={['block', 'none']}>
                <KafkaMobileTable />
              </Box>
            </>
          )}
        </Box>
        {price === 'redis' && (
          <VStack spacing={2} mt={14}>
            <Text>Disk storage cost is $0.25 per GB per month.</Text>
            <Text>
              Enabling Multi Zone Replication doubles both request and storage
              price.
            </Text>
            <Text>
              See{' '}
              <CustomLink isExternal noIcon href={LINKS.pricing}>
                pricing page
              </CustomLink>{' '}
              for more information.
            </Text>
            <Text>
              Talk to{' '}
              <CustomLink isExternal noIcon href={LINKS.support}>
                us
              </CustomLink>{' '}
              for advanced needs.
            </Text>
          </VStack>
        )}
        {price === 'kafka' && (
          <VStack spacing={2} mt={14}>
            <Text>Disk storage cost is $0.25 per GB per month.</Text>
            <Text>
              See{' '}
              <CustomLink isExternal noIcon href={LINKS.pricingKafka}>
                pricing page
              </CustomLink>{' '}
              for more information.
            </Text>
            <Text>
              Talk to{' '}
              <CustomLink isExternal noIcon href={LINKS.support}>
                us
              </CustomLink>{' '}
              for advanced needs.
            </Text>
          </VStack>
        )}

        {/**/}
      </Container>
    </Box>
  )
}

export default SectionPricing
