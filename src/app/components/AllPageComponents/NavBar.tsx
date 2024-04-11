import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useTheme,
  Spacer,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ReactSVG } from 'react-svg';
import { t } from 'utils/t';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineDollarCircle,
  AiOutlineExperiment,
} from 'react-icons/ai';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <ReactSVG
                src={'/assets/branding/logo.svg'}
                beforeInjection={svg => {
                  svg.setAttribute(
                    'style',
                    `width: 100px; height: auto; fill: ${theme.colors.main[500]};`,
                  );
                }}
              ></ReactSVG>
            </div>
          </Text>
          <Spacer />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Spacer />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'dashboard'}
          >
            {t('nav.sign_in')}
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={theme.colors.main[500]}
            href={'#'}
            _hover={{
              bg: theme.colors.main[400],
            }}
          >
            {t('nav.sign_up')}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const theme = useTheme();
  const location = useLocation();
  const linkColor = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.gray[100],
  );
  const linkHoverColor = useColorModeValue(theme.colors.main[500], 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  // Determine if the nav item is the current page
  const isCurrentNavItem = href => {
    // Special handling for the 'home' nav item with empty href
    if (href === '') {
      // Matches the base path ('/', empty, or '#')
      const basePath =
        location.pathname === '/' ||
        location.pathname === '' ||
        location.hash === '#';
      return basePath;
    } else {
      // Normalize the href to ensure it starts with a '/'
      const normalizedHref = `/${href}`;
      // Get the current path, excluding search and hash for comparison
      const path = location.pathname;
      // Check if the normalized current path matches the normalized href
      return path === normalizedHref;
    }
  };

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href || '/'} // Fallback to '/' for home item to make it clickable and redirect correctly
                fontSize={'sm'}
                fontWeight={500}
                color={
                  isCurrentNavItem(navItem.href) ? linkHoverColor : linkColor
                } // Highlight the current nav item
                display="flex"
                alignItems="center"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.icon &&
                  React.createElement(navItem.icon, {
                    style: {
                      marginRight: '0px',
                      position: 'relative',
                      right: '5px',
                      top: '-1px',
                    },
                  })}
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon: any;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: t('nav.home'),
    href: '',
    icon: AiOutlineHome,
  },
  {
    label: t('nav.features'),
    href: 'features',
    icon: AiOutlineExperiment,
  },
  {
    label: t('nav.pricing'),
    href: 'pricing',
    icon: AiOutlineDollarCircle,
  },
  {
    label: t('nav.demonstration'),
    href: 'demonstration',
    icon: AiOutlineFire,
  },
];
