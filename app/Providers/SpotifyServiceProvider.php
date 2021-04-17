<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class SpotifyServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
         $clientid='a7814781430f49b38051ef66eb2baa99';
         $clientpass='a1734acb42e443baa9be5232c6eacf1a';
         $iduser='22x6unlasi2zdl2qhwrnovygq';
        $this->app->singleton('SpotifyWebApi\SpotifyWebApi', function ($app) {
            $client = new SpotifyWebApi\SpotifyWebApi;

            $session = new SpotifyWebAPI\Session(
                $clientid,
                $clientpass,
               'https://nena.fun'
            );

            $scopes = [
                'playlist-read-private',
                'user-read-private',
            ];

            $session->requestCredentialsToken($scopes);

            $accessToken = $session->getAccessToken();

            $client->setAccessToken($accessToken);

            return $client;
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
