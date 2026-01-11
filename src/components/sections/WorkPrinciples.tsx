'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Wrench, Camera } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { colors } from '@/lib/theme/colors';

const MotionBox = motion(Box);

const principles = [
	{
		icon: Calendar,
		title: '하루 한 집 전담 운영',
	},
	{
		icon: Wrench,
		title: '전문 장비 · 친환경 약품 사용',
	},
	{
		icon: Camera,
		title: '실시간 작업 사진·영상 공유',
	},
];

export default function WorkPrinciples() {
	return (
		<Box
			className="marble-bg"
			sx={{
				py: { xs: 8, md: 12 },
				color: 'white',
				position: 'relative',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(10, 10, 10, 0.1)',
					backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(91, 124, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(91, 124, 153, 0.1) 0%, transparent 50%)
          `,
					opacity: 1,
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
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
							gap: { xs: 3, md: 4 },
						}}
					>
						{principles.map((item, index) => {
							const Icon = item.icon;
							return (
								<MotionBox
									key={index}
									variants={fadeInUp}
									sx={{
										textAlign: 'center',
										p: 4,
										backgroundColor: 'rgba(255, 255, 255, 0.2)',
										borderRadius: 2,
										border: `1px solid ${colors.border.blue}`,
										backdropFilter: 'blur(1px)',
										transition: 'all 0.4s ease',
										boxShadow: `
											0 0 20px rgba(74, 123, 167, 0.15),
											0 0 40px rgba(74, 123, 167, 0.05),
											inset 0 1px 0 rgba(255, 255, 255, 0.05)
										`,
										'&:hover': {
											backgroundColor: 'rgba(255, 255, 255, 0.08)',
											borderColor: colors.primary.main,
											transform: 'translateY(-6px)',
											boxShadow: `
												0 0 30px rgba(74, 123, 167, 0.4),
												0 0 60px rgba(74, 123, 167, 0.2),
												0 0 100px rgba(74, 123, 167, 0.1),
												inset 0 1px 0 rgba(255, 255, 255, 0.1)
											`,
										},
									}}
								>
									<Box
										sx={{
											width: 80,
											height: 80,
											borderRadius: '50%',
											backgroundColor: `${colors.primary.main}20`,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											mx: 'auto',
											mb: 3,
											border: `2px solid ${colors.primary.main}40`,
											boxShadow: colors.shadow.blue,
										}}
									>
										<Icon size={36} color={colors.primary.main} />
									</Box>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 600,
											fontSize: { xs: '1rem', md: '1.15rem' },
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
