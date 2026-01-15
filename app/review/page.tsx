'use client';

import { Box, Container, Typography, Card, CardContent, Rating } from '@mui/material';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/sections/PageHero';
import { fadeInUp, staggerContainer } from '@/lib/animation/variants';
import { colors, commonStyles } from '@/lib/theme/colors';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const highlights = [
    '작업 전/후 차이가 확실했다',
    '장비 수준이 높고 체계적이다',
    '구조와 마감 상태를 이해하고 작업한다',
    '값어치가 있었다',
    '작업 과정을 촬영해줘서 신뢰가 높았다',
    '다른 업체와 비교해 완성도가 높다',
];

// 실제 후기 데이터 (예시)
const reviews = [
    {
        name: 'g○○',
        rating: 5,
        content: '어제 김호현팀장님께 입주청소 퍼팩트하게 자~~알 받았어요.기대한 만큼 완벽한 청소였습니다.덕분에 새집에서 새출발이 너무 기대되네요.김사합니다~😍',
    },
    {
        name: 'h○○',
        rating: 5,
        content:
            '어제의 감동이 채 가시기도 전에 영상을 또 올려주시다니😭 멀리까지 와주신 것도 너무 감사한데 일이 다물어지지 않을 정도로 깨끗하게 해주셔서 너무 죄송하고 감사했어요😭 호흡기 안 좋은 아이를 키우는 엄마라 밤새 서치하고 비교해서 결정했는데 너무 잘한 선택이었다는👏👏👏 설명하시면서도 계속 손으로 훔치시고 닦고 마지막엔 어마어마한(?) 공기청정기로 눈에 보이지 않는 먼지까지 잡아내주시고 끝내고 가시면서 분리수가까지👍 하나하나 김동 아닌 게 없었고 인성까지 홀륭하신❤️ 아직 입주청소 결정 못하신분들 여깁니다!! 입주청소만 4번째인 제가 보증할게요🔥 덤으로 마스크 속에 숨겨진 훈남 보실수있어요🤭😍😍',
    },
    {
        name: 'a○○',
        rating: 5,
        content:
            '정말 고생많으셨어요~ 👍 올려주신 영상보니 더 더 감동입니다🥹 깨끗하게 청소한 집 오늘 가구 들이고 내일 이사해요~ㅎㅎ',
    },
    {
        name: 'p○○',
        rating: 5,
        content:
            '저도 5월에 입주청소했는데 정말 너무 만족했습니다. 덕분에 기침한번 안하고 잘 지내고 있어요~ 언제나 응원합니다!! 화이팅!! 👏👏',
    },
    {
        name: 'y○○',
        rating: 5,
        content:
            '대표님 정말 한집을 새집으로 선물해주셨어요 늦은시간까지 너무 깨끗하게해주셔서 너무너무 감사해요 늘 건강챙기셔서 많은이들이 이 행복을 만끽하길바래요 늘건강하고 번창하세요 🤗 🙏',
    },
    {
        name: 'm○○',
        rating: 5,
        content:
            '우리집이에용💓 진짜 너무너무 만족합니다. 깨끗하고 행복한 새집살이에 도움주셔서 감사합니다. 글구....대표님 완전 훈남 👏👏👏',
    },
    {
        name: 'm○○',
        rating: 5,
        content:
            '안녕하세요 이 집 입주청소 의뢰했던 본인입니다. 우연히 스레드에서 뜬 영상보고 신청하게 되었는데.. 대표님께 말기길 너무 잘한거같아요ㅎㅎ 이 날 습도도 높아서 엄청 더우셨을텐데.. 아침부터 와주셔서 거의 밤에 마무리하고 가주셨어요...😭 거의 12시간 청소해주신거같은데 죄송스럽기까지 하더라구요 ㅠㅠ 남편이 밤에 잠시 들렸을때 모두 땀에 완전 젖으셨다고... 진짜 엄청 고셩하셨을게 눈에 훤합니다 덕분에 아기랑 너무 깨끗한집에서 잘 이사에서 지내고 있어요!!! 주변에도 널리 홍보하고 다닐게요ㅎㅎㅎ 정말 너무너무 고생하셨고 너무너무 감사합니다 다더더 번창하세요 대표님!!!ㅎㅎㅎ',
    },
    {
        name: 's○○',
        rating: 5,
        content:
            '박진영 팀장님 덕분에 너무 깨끗한집으로 입주할 수 있게 되었습니다!! 다시 한번 감사드리고, 주위에 꼭 추천할게요. ❤️❤️',
    },
];

export default function ReviewPage() {
    return (
        <Box key="review-page">
            {/* Hero Section */}
            <PageHero
                title="고객 후기"
                subtitle={
                    <>
                        고객님들의 소중한 후기가
                        <br />
                        저희의 가장 큰 자산입니다
                    </>
                }
                isDark={false}
            />

            {/* Reviews Section - 중간 톤 */}
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
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        pointerEvents: 'none',
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <MotionTypography
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                            fontWeight: 600,
                            color: colors.primary.main,
                        }}
                    >
                        실제 고객 후기
                    </MotionTypography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {reviews.map((review, index) => (
                            <MotionCard
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: index * 0.1, duration: 0.6 },
                                    },
                                }}
                                sx={{
                                    ...commonStyles.card,
                                }}
                            >
                                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        mb: 2,
                                        flexWrap: 'wrap',
                                        gap: 2
                                    }}>
                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.text.primary }}>
                                                    {review.name}
                                                </Typography>
                                            </Box>
                                            <Rating value={review.rating} readOnly size="small" />
                                        </Box>
                                    </Box>

                                    <Box sx={{ position: 'relative', pl: 0 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: 1.8,
                                                color: colors.text.secondary,
                                                fontStyle: 'italic',
                                            }}
                                        >
                                            {review.content}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </MotionCard>
                        ))}
                    </Box>

                    {/* Bottom CTA */}
                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        sx={{
                            mt: 8,
                            p: 4,
                            backgroundColor: `${colors.primary.main}20`,
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.border.blueStrong}`,
                            borderRadius: 3,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: colors.primary.main }}>
                            당신의 공간도 새롭게 시작하세요
                        </Typography>
                        <Typography variant="body1" sx={{ color: colors.text.dark }}>
                            믿고 맡기는 청소와 함께라면 안심입니다
                        </Typography>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}
