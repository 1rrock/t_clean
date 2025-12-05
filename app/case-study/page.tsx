'use client';

import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { Home, Truck, Wrench, MapPin, Ruler, AlertTriangle, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import {colors, commonStyles} from '@/lib/theme/colors';
import PageHero from "@/components/sections/PageHero";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

// 시공 사례 데이터
const caseStudies = [
	{
		type: '입주청소',
		icon: Home,
		평수: '32평',
		location: '서울 강남구',
		problems: [
			'신축 시공 후 준공청소 미흡',
			'창틀 및 샷시에 실리콘 자국 다수',
			'타일 줄눈 시멘트 가루 잔여',
			'전체적인 미세 분진 심각',
		],
		equipment: ['전문 흡입 시스템', '고온 스팀 시스템', '바닥 폴리싱 시스템'],
		process: [
			'전체 공간 분진 흡입 작업 선행',
			'창틀 및 샷시 실리콘 자국 제거',
			'타일 줄눈 세밀 청소',
			'바닥 전체 폴리싱 마무리',
		],
		result: '입주 가능한 깨끗한 상태로 완성. 특히 창틀과 줄눈 부분의 변화가 두드러짐.',
		feedback: '생각보다 훨씬 깨끗해져서 놀랐습니다. 세세한 부분까지 신경 써주셔서 감사합니다.',
	},
	{
		type: '이사청소',
		icon: Truck,
		평수: '28평',
		location: '경기 성남시',
		problems: [
			'5년 거주 후 누적 오염',
			'주방 후드 및 환풍기 기름때',
			'욕실 타일 물때 및 곰팡이',
			'베란다 먼지 및 오염 심각',
		],
		equipment: ['고온 스팀 시스템', '전문 흡입 시스템', '친환경 약품'],
		process: [
			'주방 후드 분해 후 기름때 제거',
			'욕실 타일 스팀 및 약품 처리',
			'베란다 구조 청소',
			'전체 공간 마무리 작업',
		],
		result: '생활 흔적이 완전히 제거되어 새 집처럼 변화. 다음 입주자가 편안하게 사용 가능한 상태.',
		feedback: '주방이랑 욕실이 정말 새집 같아요. 다른 곳과 비교가 안 될 정도로 만족스럽습니다.',
	},
	{
		type: '인테리어 후 청소',
		icon: Wrench,
		평수: '24평',
		location: '서울 송파구',
		problems: [
			'전체 도장 후 석고가루 잔여',
			'바닥 타일 시공 후 줄눈 시멘트',
			'새 실리콘 시공 잔여물',
			'창틀 및 문틀 페인트 튐',
		],
		equipment: ['전문 흡입 시스템', '바닥 폴리싱 시스템', '친환경 약품'],
		process: [
			'석고가루 전체 흡입 작업',
			'바닥 타일 줄눈 정리',
			'실리콘 잔여물 제거',
			'창틀 및 문틀 페인트 제거',
			'바닥 폴리싱 마무리',
		],
		result: '시공 흔적이 완전히 제거되어 즉시 입주 가능한 상태. 바닥 광택이 특히 뛰어남.',
		feedback: '인테리어 업체에서도 이 정도는 못 깨끗하게 한다고 하더라고요. 정말 전문가시네요.',
	},
	{
		type: '입주청소',
		icon: Home,
		평수: '40평',
		location: '서울 마포구',
		problems: [
			'넓은 평수로 인한 작업 난이도',
			'대형 창호 다수 (20개 이상)',
			'현관 대리석 시공 후 오염',
			'전체 분진 관리 필요',
		],
		equipment: ['전문 흡입 시스템', '고온 스팀 시스템', '바닥 폴리싱 시스템'],
		process: [
			'2인 1조 하루 전담 작업',
			'대형 창호 하나씩 정밀 청소',
			'대리석 전문 케어',
			'전체 공간 체계적 분진 제거',
		],
		result: '넓은 평수임에도 모든 구역이 균일한 품질로 완성. 대리석 광택 복원 성공.',
		feedback: '하루 종일 작업하시는 모습 보고 정말 감동했어요. 결과도 기대 이상입니다.',
	},
];

export default function CaseStudyPage() {
	return (
		<Box key="case-study-page">
			{/* Hero Section */}
            <PageHero
                title="시공 사례"
                subtitle={
                    <>
                        실제 작업 현장에서의
                        <br />
                        문제 진단부터 완성까지의 과정을 공유합니다
                    </>
                }
                isDark={false}
            />

			{/* Case Studies Section */}
			<Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: colors.background.darkest }}>
				<Container maxWidth="lg">
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
						{caseStudies.map((study, index) => {
							const IconComponent = study.icon;
							return (
								<MotionCard
									key={index}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={{
										hidden: { opacity: 0, y: 40 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { delay: index * 0.15, duration: 0.6 },
										},
									}}
									sx={{
										backgroundColor: '#0a0a0a',
										border: '1px solid rgba(255, 255, 255, 0.1)',
										boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
										overflow: 'visible',
										transition: 'all 0.3s ease',
										'&:hover': {
											boxShadow: '0 8px 30px rgba(91, 124, 153, 0.3)',
											borderColor: '#5B7C99',
										},
									}}
								>
									<CardContent sx={{ p: { xs: 3, md: 5 } }}>
										{/* Header */}
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												mb: 4,
												flexWrap: 'wrap',
												gap: 2,
											}}
										>
											<Box
												sx={{
													width: 70,
													height: 70,
													borderRadius: '50%',
													backgroundColor: '#5B7C99',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													mr: 2,
													boxShadow: '0 4px 15px rgba(61, 125, 216, 0.4)',
												}}
											>
												<IconComponent size={36} color="white" />
											</Box>
											<Box sx={{ flex: 1 }}>
												<Typography
													variant="h4"
													sx={{
														fontWeight: 600,
														color: '#5B7C99',
														mb: 1,
													}}
												>
													{study.type}
												</Typography>
												<Box
													sx={{
														display: 'flex',
														gap: 2,
														flexWrap: 'wrap',
													}}
												>
													<Chip
														icon={<Ruler size={16} />}
														label={study.평수}
														sx={{
															backgroundColor: 'rgba(61, 125, 216, 0.2)',
															color: '#5B7C99',
															border: '1px solid #5B7C99',
														}}
														variant="outlined"
													/>
													<Chip
														icon={<MapPin size={16} />}
														label={study.location}
														sx={{
															backgroundColor: 'rgba(61, 125, 216, 0.2)',
															color: '#5B7C99',
															border: '1px solid #5B7C99',
														}}
														variant="outlined"
													/>
												</Box>
											</Box>
										</Box>

										{/* Problems */}
										<Box sx={{ mb: 4 }}>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													mb: 2,
												}}
											>
												<AlertTriangle
													size={24}
													color="#f44336"
													style={{ marginRight: '8px' }}
												/>
												<Typography
													variant="h6"
													sx={{
														fontWeight: 600,
														color: '#ffffff',
													}}
												>
													현장 문제점 진단
												</Typography>
											</Box>
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													gap: 1.5,
													pl: 4,
												}}
											>
												{study.problems.map((problem, idx) => (
													<Typography
														key={idx}
														variant="body2"
														sx={{
															lineHeight: 1.6,
															color: '#b0b0b0',
														}}
													>
														• {problem}
													</Typography>
												))}
											</Box>
										</Box>

										{/* Equipment */}
										<Box sx={{ mb: 4 }}>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													mb: 2,
												}}
											>
												<Wrench
													size={24}
													color="#5B7C99"
													style={{ marginRight: '8px' }}
												/>
												<Typography
													variant="h6"
													sx={{
														fontWeight: 600,
														color: '#ffffff',
													}}
												>
													사용 장비
												</Typography>
											</Box>
											<Box
												sx={{
													display: 'flex',
													gap: 1.5,
													flexWrap: 'wrap',
													pl: 4,
												}}
											>
												{study.equipment.map((eq, idx) => (
													<Chip
														key={idx}
														label={eq}
														sx={{
															backgroundColor: '#5B7C99',
															color: 'white',
														}}
													/>
												))}
											</Box>
										</Box>

										{/* Process */}
										<Box sx={{ mb: 4 }}>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													mb: 2,
												}}
											>
												<CheckCircle
													size={24}
													color="#4caf50"
													style={{ marginRight: '8px' }}
												/>
												<Typography
													variant="h6"
													sx={{
														fontWeight: 600,
														color: '#ffffff',
													}}
												>
													실제 작업 방식
												</Typography>
											</Box>
											<Box
												sx={{
													display: 'grid',
													gridTemplateColumns: {
														xs: '1fr',
														sm: 'repeat(2, 1fr)',
													},
													gap: 2,
													pl: 4,
												}}
											>
												{study.process.map((step, idx) => (
													<Box
														key={idx}
														sx={{
															p: 2,
															backgroundColor: 'rgba(76, 175, 80, 0.15)',
															border: '1px solid rgba(76, 175, 80, 0.3)',
															borderRadius: 1,
															display: 'flex',
															alignItems: 'center',
														}}
													>
														<Typography
															variant="caption"
															sx={{
																width: 24,
																height: 24,
																borderRadius: '50%',
																backgroundColor: '#4caf50',
																color: 'white',
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
																fontWeight: 600,
																mr: 1.5,
																flexShrink: 0,
															}}
														>
															{idx + 1}
														</Typography>
														<Typography
															variant="body2"
															sx={{
																lineHeight: 1.4,
																color: '#ffffff',
															}}
														>
															{step}
														</Typography>
													</Box>
												))}
											</Box>
										</Box>

										{/* Result */}
										<Box
											sx={{
												p: 3,
												backgroundColor: 'rgba(61, 125, 216, 0.15)',
												border: '1px solid rgba(61, 125, 216, 0.3)',
												borderRadius: 1,
												mb: 3,
											}}
										>
											<Typography
												variant="subtitle2"
												sx={{
													fontWeight: 600,
													mb: 1,
													color: '#5B7C99',
												}}
											>
												작업 결과
											</Typography>
											<Typography
												variant="body1"
												sx={{
													lineHeight: 1.8,
													color: '#ffffff',
												}}
											>
												{study.result}
											</Typography>
										</Box>

										{/* Feedback */}
										<Box
											sx={{
												p: 3,
												backgroundColor: 'rgba(255, 255, 255, 0.05)',
												borderRadius: 1,
												borderLeft: '4px solid',
												borderColor: '#5B7C99',
											}}
										>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													mb: 1,
												}}
											>
												<MessageSquare
													size={20}
													color="#5B7C99"
													style={{ marginRight: '8px' }}
												/>
												<Typography
													variant="subtitle2"
													sx={{
														fontWeight: 600,
														color: '#5B7C99',
													}}
												>
													고객 피드백
												</Typography>
											</Box>
											<Typography
												variant="body2"
												sx={{
													lineHeight: 1.8,
													fontStyle: 'italic',
													color: '#b0b0b0',
												}}
											>
												&ldquo;{study.feedback}&rdquo;
											</Typography>
										</Box>
									</CardContent>
								</MotionCard>
							);
						})}
					</Box>
				</Container>
			</Box>

			{/* Bottom CTA */}
			<Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#0a0a0a' }}>
				<Container maxWidth="md">
					<MotionBox
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						sx={{
							p: { xs: 4, md: 6 },
							backgroundColor: '#1a1a1a',
							border: '1px solid rgba(61, 125, 216, 0.3)',
							color: 'white',
							borderRadius: 1,
							textAlign: 'center',
							boxShadow: '0 4px 20px rgba(61, 125, 216, 0.2)',
						}}
					>
						<Typography
							variant="h4"
							sx={{
								mb: 2,
								fontWeight: 600,
								fontSize: { xs: '1.5rem', md: '2rem' },
								color: '#5B7C99',
							}}
						>
							여러분의 공간도 변화시킬 준비가 되어 있습니다
						</Typography>
						<Typography
							variant="body1"
							sx={{
								lineHeight: 1.8,
								color: '#b0b0b0',
							}}
						>
							전문성과 정성으로 완성하는 청소
							<br />
							믿고 맡기는 청소와 함께 하세요
						</Typography>
					</MotionBox>
				</Container>
			</Box>
		</Box>
	);
}
