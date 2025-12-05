'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Target, Heart, Leaf, GraduationCap, Eye, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import {colors, commonStyles} from '@/lib/theme/colors';

const MotionBox = motion(Box);

const philosophies = [
	{
		icon: Target,
		title: '하루 한 집, 한 공간에 집중합니다',
	},
	{
		icon: Heart,
		title: '마음과 책임을 기준으로 작업합니다',
	},
	{
		icon: Leaf,
		title: '전문 장비와 친환경 약품을 사용합니다',
	},
	{
		icon: GraduationCap,
		title: '교육을 마친 숙련 인력이 작업합니다',
	},
	{
		icon: Eye,
		title: '과정과 결과를 투명하게 공개합니다',
	},
	{
		icon: Award,
		title: '결과로 말합니다',
	},
];

export default function Philosophy() {
	return (
		<Box
			className="marble-bg"
			sx={{
				py: { xs: 8, md: 12 },
				position: 'relative',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: colors.background.overlayLight,
					pointerEvents: 'none',
				},
			}}
		>
			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				<MotionBox
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={staggerContainer}
				>
					<motion.div variants={fadeInUp}>
						<Typography
							variant="h2"
							sx={{
								textAlign: 'center',
								mb: 2,
								fontSize: { xs: '2rem', md: '2.5rem' },
								fontWeight: 600,
								color: colors.primary.main,
							}}
						>
							Brand Philosophy
						</Typography>
						<Typography
							variant="body1"
							sx={{
								textAlign: 'center',
								mb: 8,
								color: colors.text.tertiary,
								maxWidth: '600px',
								mx: 'auto',
							}}
						>
							믿고 맡기는 청소의 철학
						</Typography>
					</motion.div>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								sm: 'repeat(2, 1fr)',
								md: 'repeat(3, 1fr)',
							},
							gap: 4,
						}}
					>
						{philosophies.map((item, index) => {
							const Icon = item.icon;
							return (
								<MotionBox
									key={index}
									variants={fadeInUp}
									whileHover={{ y: -8 }}
									transition={{ duration: 0.3 }}
									sx={{
										...commonStyles.card,
										height: '100%',
										p: 4,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										textAlign: 'center',
									}}
								>
									<Box
										sx={{
											...commonStyles.iconCircle,
											width: 80,
											height: 80,
											mb: 3,
										}}
									>
										<Icon size={36} color="white" />
									</Box>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 500,
											lineHeight: 1.6,
											color: colors.text.primary,
										}}
									>
										{item.title}
									</Typography>
								</MotionBox>
							);
						})}
					</Box>
				</MotionBox>
			</Container>
		</Box>
	);
}

