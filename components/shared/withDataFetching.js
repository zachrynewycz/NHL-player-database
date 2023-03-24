import { useQuery } from "react-query";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const withDataFetching = (fetchFunction) => (WrappedComponent) => {
    const WithDataFetching = (props) => {
        const { data, isLoading, isError } = useQuery(props.queryKey, () => fetchFunction(props.id));

        if (isLoading) return <Loading />;
        if (isError) return <ErrorMessage />;

        return <WrappedComponent {...props} data={data} />;
    };

    return WithDataFetching;
};

export default withDataFetching;
