# Updating the upstream version

This package wraps [n8n](https://github.com/n8n-io/n8n) using the prebuilt multi-arch image upstream publishes to Docker Hub as `n8nio/n8n`. We do not build anything ourselves.

## Determining the upstream version

n8n publishes frequently and tags **pre-releases** on both GitHub and Docker Hub, so do not just grab the highest version number. Use the release GitHub marks as **Latest** — that is the current stable line, and it is what the `n8nio/n8n:latest` and `:stable` Docker tags point at:

```sh
# Latest STABLE release tag (e.g. "n8n@2.26.4"); strip the "n8n@" prefix.
gh release view -R n8n-io/n8n --json tagName -q .tagName
```

Confirm that the numbered tag exists on Docker Hub and that `stable` resolves to the same image, so you are pinning the same digest the stable channel ships:

```sh
V=2.26.4   # the version from above, without the "n8n@" prefix
for t in stable "$V"; do
  echo -n "$t -> "
  curl -s "https://hub.docker.com/v2/repositories/n8nio/n8n/tags/$t" | jq -r '.digest // .images[0].digest'
done
# Both lines must print the SAME digest. If they differ, the version is a
# pre-release — do not pin it.
```

The current pin lives in `startos/manifest/index.ts` at `images.n8n.source.dockerTag` (the version after the `:` in `n8nio/n8n:<version>`).

## Applying the bump

1. Bump `dockerTag` in `startos/manifest/index.ts` to `n8nio/n8n:<new version>`.
2. Update `version` (`<new version>:0`) and `releaseNotes` in `startos/versions/current.ts`.
3. Read the upstream release notes for new, renamed, or removed environment variables — n8n's runtime config is passed entirely through env vars in `startos/main.ts`. If a managed setting changed names or defaults, update `main.ts` to match.
4. Run `make` and confirm the build succeeds for both architectures.
