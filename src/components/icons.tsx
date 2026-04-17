import { IconSvgProps } from "@/types";

import LogoSvg from "@/assets/logo.svg?react";
import PhoneSvg from "@/assets/phone.svg?react";
import TelegramSvg from "@/assets/telegram.svg?react";
import ViberSvg from "@/assets/viber.svg?react";
import InstagramSvg from "@/assets/instagram.svg?react";

export const Logo = ({ size = 280, height = 65, ...props }: IconSvgProps) => (
	<LogoSvg width={size} height={height || size} {...props} />
);

export const PhoneIcon = ({ size = 30, height, ...props }: IconSvgProps) => (
	<PhoneSvg width={size || height} height={size || height} {...props} />
);

export const TelegramIcon = ({ size = 30, height, ...props }: IconSvgProps) => (
	<TelegramSvg width={size || height} height={size || height} {...props} />
);

export const ViberIcon = ({ size = 30, height, ...props }: IconSvgProps) => (
	<ViberSvg width={size || height} height={size || height} {...props} />
);

export const InstagramIcon = ({
	size = 30,
	height,
	...props
}: IconSvgProps) => (
	<InstagramSvg width={size || height} height={size || height} {...props} />
);
