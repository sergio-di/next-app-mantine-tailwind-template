import React from 'react';
import { Switch } from '@nextui-org/react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useMantineColorScheme, Button, Group } from "@mantine/core";



const ThemeToggle: React.FC = () => {
    const { setColorScheme, toggleColorScheme } = useMantineColorScheme();


    return (
        <Switch
                onChange={toggleColorScheme}
            size="lg"
            color="secondary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
        />
    );
};

export default ThemeToggle;




