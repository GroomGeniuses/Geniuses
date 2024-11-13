import React from "react";

export default function PostView() {
    return (
        <div className="max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg bg-white">
            <div className="mb-4">
                <h1 className="text-xl font-semibold mb-2">
                    더 지니어스: 게임의 법칙
                </h1>
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                    <span>정종연</span>
                    <span>|</span>
                    <span>2013.04.26</span>
                </div>
            </div>

            <div className="mb-4 text-gray-700 leading-relaxed text-left">
                <p>13인의 금요일! 마지막 순간까지 믿지 마라! 반전의 리얼리티 쇼 &lt;더 지니어스: 게임의 법칙&gt;</p>
                <br/>
                    <p>세상에 없던 TV 프로그램의 탄생!</p>
                    <p>게임의 스릴, 드라마틱 스토리, 심리 리얼리티를 담은 세상에 없던 프로그램이 탄생했다. 한정된 시간 동안 게임을 벌이며 자신의 정신과 지적 능력을 동원하여 벌이는 드라마틱한 심리전과 예측 불가 승부가 펼쳐진다!</p>
                <br/>
                    <p>각기 다른 직업과 다양한 연령대의 최고 승부사 13인</p>
                    <p>방송인, 정치인, 프로겜블러 등 다양한 직업군과 20~60대에 이르는 연령대의 출연자들이 저마다의 전략들로 벌이는 한판 승부가 시작된다!</p>
                <br/>
                    <p>적나라한 본성의 노출!</p>
                    <p>방송인, 정치인, 프로겜블러 등 다양한 직업군과 20~60대에 이르는 연령대의 출연자들이 저마다의 전략들로 벌이는 한판 승부가 시작된다!</p>
                <br/>
                    <p>끝을 알 수 없는 드라마틱한 반전!</p>
                    <p>오늘의 동지가 내일의 적이 된다. 오직 이해 관계에 따라서 변화하는 인간 관계와 한치 앞도 알 수 없는 드라마틱한 반전의 묘미가 시작된다!</p>
            </div>

            <div className="text-sm text-gray-500 flex space-x-4 border-t pt-4">
                <span>조회 1</span>
                <span>|</span>
                <span>관심 0</span>
                <span>|</span>
                <span>지원 13</span>
            </div>
        </div>
    )
}