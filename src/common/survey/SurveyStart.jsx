import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../redux/modules/modal';
import Modal from './Modal';
import { styled } from 'styled-components';

const SurveyStart = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <>
      <div>
        <h2>입양동물 의료 분담금 발생</h2>
        {/* 구분 선 span에 넣어주시면 될 것 같습니다 */}
        <span></span>
        <p>
          무상입양 공고 시 발생하는 폐단을 예방하기 위한 목적으로 입양 대상 동물에게 발생하는 최소한의 비용(에방 접종 및
          중성화 수술비 등) 일부를 분담금으로 바고 있습니다. 입양 가족분들의{' '}
        </p>
      </div>

      <br />

      <div>
        <h1>입양절차 및 유의사항</h1>
        {/* 구분 선 span에 넣어주시면 될 것 같습니다 */}
        <span></span>
        <div>
          <h3>입양 신청서 작성</h3>
          {/* 구분 선 span에 넣어주시면 될 것 같습니다 */}
          <span></span>
          <p>
            입양을 원하시는 분은 [입양신청서 작성] 버튼을 누르시고 간단한 입양 신청서를 작성해 주세요. <br /> 작성 시
            정보를 정확하게 기재해 주시길 바랍니다.
          </p>
        </div>
        <div>
          <h3>전화상담 및 방문면담</h3>
          {/* 구분 선 span에 넣어주시면 될 것 같습니다 */}
          <span></span>
          <p>
            입양 담당자가 신청서 검토 후 개별 연락을 드립니다.
            <br />
            전화상담을 하신 신청자는 남양주에 위치한 온센터로 방문해 개별 면담을 진행하게 됩니다.
            <br />
            면담 결과를 토대로 최종 입양이 결정됩니다.
          </p>
        </div>
        <div>
          <h3>입양동의서 작성 후 입양</h3>
          {/* 구분 선 span에 넣어주시면 될 것 같습니다 */}
          <span></span>
          <p>
            입양이 최종적으로 결정되면 입양 가정으로 동물을 데려다 드리며 입양서류를 작성하시면 모든 절차가 마무리
            됩니다.
            <br />
            단, 가정 방문 후 환경에 따라 입양이 취소될 수 있습니다.
          </p>
        </div>
      </div>

      <div>
        <p>*입양신청서 접수 후 신청서 검토 및 개별 연락은 3~5일 정도 소요되며 상황에 따라 지연될 수 있습니다.</p>
        <p>*입양 신청서 심사에서 선정되지 않은 분에게는 이메일로 연락드립닏다.</p>
        {/* 강조 색깔 넣어주세요 */}
        <span>*동물 입양은 반드시 가족 구성원 전원의 동의를 얻어야 합니다.</span>
        {/* 강조 색깔 넣어주세요 */}

        <span>
          *미성년자가 입양을 신청한 경우, 본인 및 가족 구성원 중 알레르기가 있거나 동물에게 위해가 될 수 있는 정신
          질환을 가진 경우 입양자 선정에서 제외됩니다.
        </span>
      </div>

      <br />
      <br />

      <div>
        <button
          onClick={() => {
            dispatch(showModal(true));
          }}
        >
          입양 신청서 작성
        </button>
      </div>

      <ModalContainer>{modal && <Modal />}</ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 180px;
  left: 1000px;
`;
export default SurveyStart;
