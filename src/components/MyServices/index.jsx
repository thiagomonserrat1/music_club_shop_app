import { useService } from "../../providers/Services";
import { useEffect } from "react";
import MyServicesComponent from "../MyServicesComponent";
import { Container } from "./styles";
import ModalInfoMyService from "../ModalInfoMyService";
import empty from "../../assets/empty.svg";

const MyServices = ({ showService }) => {
  const { getSevicesClient, services } = useService();

  useEffect(() => {
    getSevicesClient();
  }, []);

  return (
    <Container showService={showService}>
      <h1>MEUS SERVIÇOS SOLICITADOS</h1>
      <ul>
        {services.length === 0 ? (
          <img src={empty} alt="empty" />
        ) : (
          services.map((service) => {
            return <MyServicesComponent key={service.id} service={service} />;
          })
        )}
      </ul>
    </Container>
  );
};
export default MyServices;
