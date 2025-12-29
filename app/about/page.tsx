'use client';

import { Box, Container } from '@mui/material';
import { Target, Heart, Leaf, GraduationCap, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { colors, commonStyles } from '@/lib/theme/colors';

const MotionBox = motion(Box);
const MotionTypography = motion(Box);

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

export default function AboutPage() {
	return (
		<Box key="about-page">
			{/* Hero Section */}
			<PageHero
				title="믿고 맡기는 청소 소개"
				subtitle={
					<>
						고객님의 새로운 시작이 행복과 설렘으로 가득할 수 있도록,
						<br />
						정성과 책임을 담아 공간을 케어하는 프리미엄 청소 서비스입니다.
						<br />
						<br />
						저희는 결과만을 위해 움직이지 않습니다.
						<br />
						이 집에 들어오실 분의 마음, 그 설렘과 기대를 함께 느끼며
						<br />
						좋은 마음으로, 좋은 청소를 완성합니다.
					</>
				}
				isDark={false}
			/>

			{/* Philosophy Section - 완전히 밝게 */}
			<Box
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
						backgroundColor: colors.background.darkest,
						backgroundImage: colors.gradient.blueRadialStrong,
						pointerEvents: 'none',
					},
				}}
			>
				<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
					>
						<Box
							component="h3"
							sx={{
								...commonStyles.sectionTitle,
								color: colors.primary.main,
							}}
						>
							브랜드 철학
						</Box>
					</motion.div>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
							gap: 4,
						}}
					>
						{philosophies.map((item, index) => {
							const Icon = item.icon;
							return (
								<MotionBox
									key={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { delay: index * 0.1, duration: 0.5 },
										},
									}}
									sx={{
										p: 4,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										textAlign: 'center',
										backgroundColor: 'rgba(255, 255, 255, 0.08)',
										backdropFilter: 'blur(10px)',
										border: `1px solid ${colors.border.blueStrong}`,
										borderRadius: 1,
										boxShadow: '0 4px 20px rgba(91, 124, 153, 0.2)',
										transition: 'all 0.3s ease',
										'&:hover': {
											boxShadow: '0 8px 30px rgba(91, 124, 153, 0.4)',
											borderColor: colors.primary.main,
											transform: 'translateY(-8px)',
											backgroundColor: 'rgba(255, 255, 255, 0.12)',
										},
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
									<Box
										component="h6"
										sx={{
											fontWeight: 500,
											lineHeight: 1.6,
											color: colors.text.primary,
											fontSize: '1.25rem',
										}}
									>
										{item.title}
									</Box>
								</MotionBox>
							);
						})}
					</Box>
				</Container>
			</Box>

			{/* Directions Section - 오시는 길 */}
			<Box
				sx={{
					py: { xs: 8, md: 12 },
					backgroundColor: colors.background.dark,
				}}
			>
				<Container maxWidth="lg">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
					>
						<Box
							component="h3"
							sx={{
								...commonStyles.sectionTitle,
								textAlign: 'center',
								mb: 6,
							}}
						>
							오시는 길
						</Box>

						<Box
							component="a"
							href="https://map.naver.com/v5/search/경기%20시흥시%20시흥대로%20500"
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								display: 'block',
								textDecoration: 'none',
								color: colors.text.primary,
								maxWidth: 800,
								mx: 'auto',
								p: 4,
								borderRadius: 2,
								border: `1px solid ${colors.border.default}`,
								backgroundColor: colors.background.card,
								transition: 'all 0.3s ease',
								'&:hover': {
									transform: 'translateY(-4px)',
									boxShadow: colors.shadow.hover,
									borderColor: colors.border.hover,
									'& .map-image': {
										transform: 'scale(1.1)',
									},
								},
							}}
						>
							<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
								{/* Map Image */}
								<Box
									sx={{
										width: { xs: '100%', md: 240 },
										height: 180,
										borderRadius: 1,
										overflow: 'hidden',
										border: `1px solid ${colors.border.default}`,
										position: 'relative',
									}}
								>
									<Box
										component="img"
										src="/images/location_map.png"
										alt="Map of Siheung Office Location"
										className="map-image"
										sx={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
											transition: 'transform 0.5s ease',
										}}
									/>
								</Box>

								<Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
									<Box sx={{ mb: 2 }}>
										<Box
											component="span"
											sx={{
												display: 'inline-block',
												px: 1,
												py: 0.5,
												mb: 1,
												borderRadius: 0.5,
												backgroundColor: 'rgba(3, 159, 247, 0.15)', // colors.primary.light is #CEECFD which is too light for bg, using custom alpha
												color: colors.primary.main,
												fontSize: '0.75rem',
												fontWeight: 600,
											}}
										>
											HEAD OFFICE
										</Box>
										<Box component="h4" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 0.5 }}>
											시흥 본사
										</Box>
									</Box>

									<Box sx={{ color: colors.text.secondary, mb: 3 }}>
										경기 시흥시 시흥대로 500
										<br />
										시티프론트 큐브앤칼리오 501~3호
									</Box>

									<Box
										sx={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: 1,
											color: colors.primary.main,
											fontWeight: 500,
											fontSize: '0.9rem',
										}}
									>
										네이버 지도에서 보기
										<Target size={16} />
									</Box>
								</Box>
							</Box>
						</Box>
					</motion.div>
				</Container>
			</Box>
		</Box>
	);
}

