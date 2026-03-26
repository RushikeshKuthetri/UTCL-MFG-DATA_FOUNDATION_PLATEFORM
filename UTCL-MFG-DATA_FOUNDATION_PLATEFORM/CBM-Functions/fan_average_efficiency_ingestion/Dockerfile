FROM public.ecr.aws/lambda/python:3.11
# Copy requirements.txt
COPY requirements.txt ${LAMBDA_TASK_ROOT}
 
# Install system dependencies
RUN yum install -y \
    gcc \
    gcc-c++ \
    make \
    unixODBC \
    unixODBC-devel \
    curl \
    tar \
    gzip \
&& yum clean all
# Install Microsoft ODBC Driver 17 for SQL Server
RUN curl -o msprod.repo https://packages.microsoft.com/config/rhel/7/prod.repo && \
    cp msprod.repo /etc/yum.repos.d/msprod.repo && \
    yum remove unixODBC-utf16 unixODBC-utf16-devel -y && \
    ACCEPT_EULA=Y yum install -y --nogpgcheck msodbcsql17 && \
    yum clean all
# Install the specified packages
RUN pip install -r requirements.txt
# Copy function code
COPY lambda_function.py ${LAMBDA_TASK_ROOT}
COPY main_module.py ${LAMBDA_TASK_ROOT}
COPY average_efficiency_support_module.py ${LAMBDA_TASK_ROOT}
# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda_function.handler" ]
