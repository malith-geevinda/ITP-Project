import styled from 'styled-components'

const Wrapper = styled.article`
  background: var(--white);
  /* background-color:#152238; */
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  .logoRG{
    max-width: 250px;
    max-height: 125px;
    align-self: center;
  }

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .Laptops {
    background: #fcefc7;
    color: #e9b949;
  }
  .DesktopWorkStations {
    background: #e0e8f9;
    color: #647acb;
  }
  .MotherBoards {
    color: #d66a6a;
    background: #ffeeee;
  }


    .Processors {
    background: #b0e075;
    color: #a1d660;
  }
  .GraphicCards {
    background: #e0e8f9;
    color: #647acb;
  }
  .Memory{
    color: #d66a6a;
    background: #ffeeee;
  }

    .Storage {
    background: #fcefc7;
    color: #e9b949;
  }
  .Monitors {
    background: #e0e8f9;
    color: #647acb;
  }
  .ExternalStorages {
    color: #d66a6a;
    background: #ffeeee;
  }


    .Mouse {
    background: #fcefc7;
    color: #e9b949;
  }
  .KeyBoard {
    background: #e0e8f9;
    color: #647acb;
  }
  .Casings  {
    color: #d66a6a;
    background: #ffeeee;
  }


    /* .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  } */
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 1rem;
    margin-left: 10rem;
    margin-bottom: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`

export default Wrapper
