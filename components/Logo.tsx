import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={"/"}>
        <h2 className={cn(
              "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans", )}>
            Smart Healthy
        </h2>
    </Link>
  );
}

export default Logo;
