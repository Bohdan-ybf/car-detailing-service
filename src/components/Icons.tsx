import FeaturesIconSvg1 from "@/assets/features-icon-1.svg?react";
import FeaturesIconSvg2 from "@/assets/features-icon-2.svg?react";
import FeaturesIconSvg3 from "@/assets/features-icon-3.svg?react";
import InstagramSvg from "@/assets/instagram.svg?react";
import LogoSvg from "@/assets/logo.svg?react";
import PhoneSvg from "@/assets/phone.svg?react";
import TelegramSvg from "@/assets/telegram.svg?react";
import ViberSvg from "@/assets/viber.svg?react";
import type { IconSvgProps } from "@/types";

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

export const featuresIcon1 = ({
	size = 50,
	height,
	...props
}: IconSvgProps) => (
	<FeaturesIconSvg1 width={size || height} height={size || height} {...props} />
);

export const featuresIcon2 = ({
	size = 50,
	height,
	...props
}: IconSvgProps) => (
	<FeaturesIconSvg2 width={size || height} height={size || height} {...props} />
);

export const featuresIcon3 = ({
	size = 50,
	height,
	...props
}: IconSvgProps) => (
	<FeaturesIconSvg3 width={size || height} height={size || height} {...props} />
);
