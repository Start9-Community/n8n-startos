ARG IMAGE

# The runtime image has no package manager, so a fixed bundle comes from Alpine.
FROM alpine:3.24 AS ca
RUN apk add --no-cache ca-certificates \
 && if [ -f /etc/ssl/certs/ca-certificates.crt.apk-new ]; then mv /etc/ssl/certs/ca-certificates.crt.apk-new /etc/ssl/certs/ca-certificates.crt; fi \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt

FROM ${IMAGE}
USER root
# Its hashed per-root links still name the distrusted roots, so the directory holds only the bundle.
RUN find /etc/ssl/certs -mindepth 1 -delete
COPY --from=ca /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
USER node
ENV NODE_OPTIONS=--use-openssl-ca
