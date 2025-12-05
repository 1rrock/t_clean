'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Wrench, Camera } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';

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
					<motion.div variants={fadeInUp}>
						<Typography
							variant="h3"
							sx={{
								textAlign: 'center',
								mb: 6,
								fontSize: { xs: '1.8rem', md: '2.2rem' },
								fontWeight: 600,
							}}
						>
							믿고 맡기는 청소는 하루 한 집 전담제로 운영되며,
							<br />
							전문 장비와 친환경 약품 사용을 기본 원칙으로 합니다.
							<br />
							전 과정은 사진과 영상으로 기록해 투명하게 공유합니다.
						</Typography>
					</motion.div>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
							gap: 4,
							mt: 4,
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
										p: 3,
									}}
								>
									<Box
										sx={{
											width: 100,
											height: 100,
											borderRadius: '50%',
											backgroundColor: 'rgba(91, 124, 153, 0.2)',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											mx: 'auto',
											mb: 3,
											backdropFilter: 'blur(10px)',
											border: '2px solid rgba(91, 124, 153, 0.4)',
											boxShadow: '0 4px 20px rgba(91, 124, 153, 0.3)',
										}}
									>
										<Icon size={48} color="#5B7C99" />
									</Box>
									<Typography
										variant="h6"
										sx={{
											fontWeight: 600,
											fontSize: { xs: '1.1rem', md: '1.3rem' },
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
