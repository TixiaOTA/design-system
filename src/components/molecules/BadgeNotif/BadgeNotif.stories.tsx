import { BadgeNotif } from "./BadgeNotif";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BadgeNotif> = {
    title: 'Molecules/BadgeNotif',
    component: BadgeNotif,
    parameters: {
        layout: 'centered',
      },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: 'text',
            description: 'The icon name from Iconify',
        },
        color: {
            control: 'color',
            description: 'Color of the icon',
        },
        plusIcon: {
            control: 'boolean',
            description: 'Adding plus after number',
        },
        badgeContent: {
            control: 'text',
            description: 'Content of badge ',
        },
        position: {
            control: 'select',
            options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
            description: 'Position the icon',
        },
        variant: {
            control: 'select',
            options: ['dot', 'number'],
            description: 'Variant the icon',
        },
    },
  };
  
  export default meta;
  type Story = StoryObj<typeof BadgeNotif>;

  export const Default: Story = {
    args: {
      icon: 'mdi:bell-outline',
      color: '#007C99',
      plusIcon: false,
      badgeContent: 10,
      position: 'top-right'
    }
  };

  export const CommonIcons: Story = {
    render: () => {
        const icons = ['mdi:bell-outline', 'mdi:email-outline'];
    
        return (
          <div className="flex gap-20">
            {icons.map((icon, index) => (
              <BadgeNotif
                key={index}
                icon={icon}
                variant="number"
                color="#007C99"
                plusIcon={false}
                badgeContent={10}
                position="top-right"
              />
            ))}
          </div>
        );
      }
  };

  export const Color: Story = {
    render: () => {
        const colors = ['#007C99', '#EF4444', '#F59E0B', '#10B981'];
    
        return (
          <div className="flex gap-20">
            {colors.map((color, index) => (
              <BadgeNotif
                key={index}
                icon='mdi:bell-outline'
                variant="number"
                color={color}
                plusIcon={false}
                badgeContent={10}
                position="top-right"
              />
            ))}
          </div>
        );
      }
  };

  export const PlusIcon: Story = {
    args: {
        icon: 'mdi:bell-outline',
        color: '#007C99',
        plusIcon: true,
        badgeContent: 99,
        position: 'top-right'
    }
  };

  export const BadgeContent: Story = {
    render: () => {
        const badgeContents  = [1, 20, 100];
    
        return (
          <div className="flex gap-20">
            {badgeContents.map((badgeContent, index) => (
              <BadgeNotif
                key={index}
                icon={'mdi:bell-outline'}
                variant="number"
                color="#007C99"
                plusIcon={false}
                badgeContent={badgeContent}
                position='top-right'
              />
            ))}
          </div>
        );
      }
  };

  export const positions: Story = {
    render: () => {
        const allPosition  = ['top-right', 'bottom-right', 'bottom-left', 'top-left'] as const;
    
        return (
          <div className="flex gap-20">
            {allPosition.map((position, index) => (
              <BadgeNotif
                key={index}
                icon={'mdi:bell-outline'}
                variant="number"
                color="#007C99"
                plusIcon={false}
                badgeContent={10}
                position={position}
              />
            ))}
          </div>
        );
      }
  };

  export const Variants: Story = {
    render: () => {
        const allVariants  = ['dot', 'number'] as const;
    
        return (
          <div className="flex gap-20">
            {allVariants.map((variant, index) => (
              <BadgeNotif
                key={index}
                icon={'mdi:bell-outline'}
                variant={variant}
                color="#007C99"
                plusIcon={false}
                badgeContent={10}
                position='top-right'
              />
            ))}
          </div>
        );
      }
    }

