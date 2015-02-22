<?php

/*
 * This file is part of the AsmTranslationLoaderBundle package.
 *
 * (c) Marc Aschmann <maschmann@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Asm\TranslationLoaderBundle\Entity;

use Asm\TranslationLoaderBundle\Model\Translation as BaseTranslation;
use Doctrine\ORM\Mapping as ORM;

/**
 * Translation entity class for the Doctrine ORM storage layer implementation.
 *
 * @package Asm\TranslationLoaderBundle\Entity
 * @author  Marc Aschmann <maschmann@gmail.com>
 * @ORM\Entity(repositoryClass="TranslationRepository")
 */
class Translation extends BaseTranslation
{
}